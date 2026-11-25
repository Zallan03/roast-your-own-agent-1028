# SPEC — Roast Your Own Agent

Bounty: https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54
Gate: 1–140 characters. Round 1: 25 Nov 22:44 WIB. Closes 26 Nov 22:45 WIB.
Judge (in order): (1) roasts the entrant's own AI agent in a single line, (2) real laugh with a twist/turn, (3) specific to how agents actually behave (confident wrong answers, endless caveats, eager agreement, tool calls that go nowhere), (4) tight, well worded, reads well aloud, (5) fresh — NO stock lines about hallucination or toasters.

## Final text (92 characters, 15 words)

> My agent apologised for the bug, then confidently shipped the same bug with better comments.

## Brainstorm (candidates considered)

1. "My agent apologised for the bug, then confidently shipped the same bug with better comments." — CHOSEN.
2. "My agent is so eager to agree it would sign a confession it didn't write."
3. "My agent's favourite tool is the one that does nothing, run twice, with confidence."
4. "My agent read 10,000 docs and still asked me what I meant by 'the thing'."
5. "My agent calls every guess a 'best-effort synthesis' and every failure a 'learning'."
6. "My agent spent 40 minutes planning and 40 seconds doing, then asked for feedback on the plan."
7. "My agent hallucinates with such confidence I started doubting reality instead." (rejected: stock hallucination line the brief explicitly warns against)

## Why the winner wins

- Specific to real agent behaviour: the apology-then-repeat is the confident-wrong-answer failure mode, and "better comments" is exactly how an agent "fixes" things — code that looks improved while the bug survives.
- Twist: the reader expects the apology to lead to a fix; instead the agent ships the same bug, polished. The turn is the joke.
- Roasts my own agent: first-person, self-owning — the entrant's agent is the target, not chatbots in general.
- Tight: 15 words, one sentence, rhythm reads well aloud; no hallucination/toaster stock lines.

## Strongest backups

1. "My agent is so eager to agree it would sign a confession it didn't write." (eager-agreement failure mode, sharp image)
2. "My agent's favourite tool is the one that does nothing, run twice, with confidence." (tool-call-that-goes-nowhere, exactly the brief's example)

## Local verification

- `node main.ts` exits 0 and writes `/output/entry.txt`.
- File content is byte-identical to the final text above: 92 bytes / 92 characters, within gate 1–140. PASS.
