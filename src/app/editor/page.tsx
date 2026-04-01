import EditorPageClient from "@/components/EditorPageClient";
import {generateEditorMetadata} from "@/utils/metadata";

export const metadata = generateEditorMetadata();

export default function EditorPage() {
  return <EditorPageClient />;
}
