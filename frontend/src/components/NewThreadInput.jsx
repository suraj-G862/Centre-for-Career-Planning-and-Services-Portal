import React, { useRef, useState } from 'react'
import useThreadStore from '../api/useThreadStore.js';

const NewThreadInput = () => {
    const [thread, setThread] = useState({ title: '', text: '' });
    const [filePreview, setFilePreview] = useState(null);
    const fileInputRef = useRef(null);
    const { createThread } = useThreadStore();

    const handleFileChange = (e) => { }

    const removeFile = () => { }

    const handleCreateThread = async (e) => { }


    return (
        <div className='p-4 w-full'>
            {/* {filePreview && (
                <div className="mb-3 flex items-center gap-2">
                    <div className="relative">
                        <img
                            src={filePreview}
                            alt="Preview"
                            className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
                        />
                        <button
                            onClick={removeImage}
                            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
                            type="button"
                        >
                            <X className="size-3" />
                        </button>
                    </div>
                </div>
            )} */}
        </div>
    )
}

export default NewThreadInput