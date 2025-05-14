export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({
      error: { code: 1, message: 'Only POST method supported' },
      data: { result: false }
    });
  }

  const payload = req.body;

  const address = payload?.address?.toLowerCase();
  const twitterId = payload?.twitter;
  const discord = payload?.discord;
  const telegram = payload?.telegram;
  const email = payload?.email;
  const start = payload?.startTimestamp;
  const end = payload?.endTimestamp;

  try {
    const hasCompletedTask = address === "0x123...";

    return res.status(200).json({
      error: { code: 0, message: "success" },
      data: { result: hasCompletedTask }
    });
  } catch (e) {
    return res.status(200).json({
      error: { code: 2, message: e.message },
      data: { result: false }
    });
  }
}
