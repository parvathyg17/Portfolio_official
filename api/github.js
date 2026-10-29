export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=7200");

  const username = "parvathyg17";
  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-Parvathi-App",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, { headers }),
    ]);

    if (!userRes.ok) {
      throw new Error(`GitHub user API returned HTTP ${userRes.status}`);
    }

    const userData = await userRes.json();
    const reposData = reposRes.ok ? await reposRes.json() : [];

    const recentRepos = Array.isArray(reposData)
      ? reposData.slice(0, 6).map((r) => ({
          name: r.name,
          description: r.description,
          html_url: r.html_url,
          language: r.language,
          stars: r.stargazers_count,
          updated_at: r.updated_at,
        }))
      : [];

    const langMap = {};
    if (Array.isArray(reposData)) {
      reposData.forEach((r) => {
        if (r.language) {
          langMap[r.language] = (langMap[r.language] || 0) + 1;
        }
      });
    }

    const languages = Object.entries(langMap)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);

    return res.status(200).json({
      success: true,
      username,
      publicRepos: userData.public_repos ?? 19,
      followers: userData.followers ?? 0,
      recentRepos,
      languages,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      username,
      error: error.message,
      publicRepos: 19,
      recentRepos: [],
      languages: [],
    });
  }
}
