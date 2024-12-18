import { MarkdownEditorView, useMarkdownEditor } from "@gravity-ui/markdown-editor";
import { toaster } from "@gravity-ui/uikit/toaster-singleton-react-18";
import { useEffect } from "react";

function CustomEditor({onSubmit}: {onSubmit: (param: string) => void}) {
  const editor = useMarkdownEditor({
    initialSplitModeEnabled: true,
    splitMode: 'vertical',
    allowHTML: true
  });

  useEffect(() => {
    function submitHandler() {
      const value = editor.getValue()
      onSubmit(value)
    }

    editor.on('submit', submitHandler)
    
    return () => {
      editor.off('submit', submitHandler)
    }
  }, [onSubmit])

  return (
    <MarkdownEditorView
      editor={editor}
      toaster={toaster}
      stickyToolbar={true}
    />    
  )
}

export default CustomEditor;
