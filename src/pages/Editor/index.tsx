import CustomEditor from "features/components/CustomEditor";

const Editor = () => {
  return (
    <div style={{paddingBlock: '1rem'}}>
      <CustomEditor
        onSubmit={(value: string) => {
          return value;
        }}
      />
    </div>
  );
};

export default Editor;
