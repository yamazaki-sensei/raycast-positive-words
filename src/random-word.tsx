
import { Action, ActionPanel, Detail, useNavigation, open, showToast, Toast } from "@raycast/api";
import { useEffect, useState } from "react";
import { POSITIVE_WORDS } from "./words";

function pick(): string {
  const i = Math.floor(Math.random() * POSITIVE_WORDS.length);
  return POSITIVE_WORDS[i];
}

export default function Command() {
  const [word, setWord] = useState<string>("");
  useEffect(() => {
    setWord(pick());
  }, []);

  const refresh = () => {
    const next = pick();
    setWord(next);
    showToast({ style: Toast.Style.Success, title: "New word", message: next });
  };

  const markdown = `# ${word}\n\nRandom positive word from a curated list of ${POSITIVE_WORDS.length}.`;

  return (
    <Detail
      markdown={markdown}
      actions={
        <ActionPanel>
          <Action.CopyToClipboard title="Copy" content={word} />
          <Action.Paste title="Paste in Frontmost App" content={word} />
          <Action title="Next Word" onAction={refresh} />
          <Action.OpenInBrowser title="Open Raycast Docs" url="https://developers.raycast.com" />
        </ActionPanel>
      }
    />
  );
}
