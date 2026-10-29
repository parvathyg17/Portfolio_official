export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=7200");

  const username = "parvathig17";

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
      },
      body: JSON.stringify({
        query: `query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
            userCalendar {
              submissionCalendar
            }
          }
        }`,
        variables: { username },
      }),
    });

    if (!response.ok) {
      throw new Error(`LeetCode returned HTTP ${response.status}`);
    }

    const data = await response.json();
    const matchedUser = data?.data?.matchedUser;

    if (!matchedUser) {
      throw new Error("User not found on LeetCode");
    }

    const stats = matchedUser.submitStatsGlobal?.acSubmissionNum || [];
    const all = stats.find((s) => s.difficulty === "All")?.count || 0;
    const easy = stats.find((s) => s.difficulty === "Easy")?.count || 0;
    const medium = stats.find((s) => s.difficulty === "Medium")?.count || 0;
    const hard = stats.find((s) => s.difficulty === "Hard")?.count || 0;

    let submissionCalendar = {};
    try {
      if (matchedUser.userCalendar?.submissionCalendar) {
        submissionCalendar = JSON.parse(matchedUser.userCalendar.submissionCalendar);
      }
    } catch {
      submissionCalendar = {};
    }

    return res.status(200).json({
      success: true,
      username,
      total: all,
      easy,
      medium,
      hard,
      submissionCalendar,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      username,
      error: error.message,
      total: 111,
      easy: 97,
      medium: 13,
      hard: 1,
      submissionCalendar: {},
    });
  }
}
