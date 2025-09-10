import { Clipboard, closeMainWindow, showToast, Toast } from "@raycast/api";
import { POSITIVE_WORDS } from "./words";

export default async function Command() {
  const i = Math.floor(Math.random() * POSITIVE_WORDS.length);
  const word = POSITIVE_WORDS[i];
  await Clipboard.copy(word);
  await showToast({
    style: Toast.Style.Success,
    title: "Copied",
    message: word,
  });
  await closeMainWindow({ clearRootSearch: true });
}
