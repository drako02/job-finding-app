import FileInput from "./FileInput.tsx";
import Button from "../Button.tsx";
import TextEditor from "./TextEditor.tsx";
import {useState} from "react";
// import DOMPurify from 'dompurify'


const AccomplishmentForm =() => {
    const [editorContent, setEditorContent] = useState<string>('');

    // const sanitizedContent = DOMPurify.sanitize(editorContent);


    return (
        <form className="w-[100%] h-[401px] flex flex-col justify-start gap-[20%] items-center py-[5.3%] px-[6.6%]">
            <div className="flex flex-col  justify-between items-center w-[100%] h-[192px]">
                <TextEditor
                    value={editorContent}
                    onChange={setEditorContent}
                    placeholder="Start typing..."
                />

            </div>
            <Button
                className="!w-[104px] !h-[48px] bg-black !text-white !border-[1px] border-[#E8E8E8] ml-auto "> Save </Button>
        </form>
    )
}

export default AccomplishmentForm;