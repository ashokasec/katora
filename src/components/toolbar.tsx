import { AlignCenter, AlignLeft, AlignRight, Bold, ChevronDown, Heading1, Heading2, Heading3, Highlighter, Image, Italic, Link, Minus, Plus, Quote, Underline, Unlink } from "lucide-react"

interface SmallButtonProps {
    onClick: () => void,
    icon: React.ReactNode,
}

const SmallButtons: React.FC<SmallButtonProps> = ({ onClick, icon }) => {
    return <span className="aspect-square p-2 hover:bg-[#252525] rounded-lg cursor-pointer" onClick={onClick}>{icon}</span>
}

const Toolbar = ({ editor }: any) => {

    if (!editor) return null

    const textAlignment = [
        {
            icon: <AlignLeft size={18} />,
            onclick: () => editor.chain().focus().setTextAlign('left').run()
        },
        {
            icon: <AlignCenter size={18} />,
            onclick: () => editor.chain().focus().setTextAlign('center').run()
        },
        {
            icon: <AlignRight size={18} />,
            onclick: () => editor.chain().focus().setTextAlign('right').run()
        },
    ]

    const basicFormatting = [
        {
            icon: <Bold size={18} />,
            onclick: () => editor.chain().focus().setBold().run()
        },
        {
            icon: <Italic size={18} />,
            onclick: () => editor.chain().focus().toggleItalic().run()
        },
        {
            icon: <Underline size={18} />,
            onclick: () => editor.chain().focus().toggleUnderline().run()
        },
    ]
    const headings = [
        {
            icon: <Heading1 size={18} />,
            onclick: () => editor.chain().focus().toggleHeading({ level: 1 }).run()
        },
        {
            icon: <Heading2 size={18} />,
            onclick: () => editor.chain().focus().toggleHeading({ level: 2 }).run()
        },
        {
            icon: <Heading3 size={18} />,
            onclick: () => editor.chain().focus().toggleHeading({ level: 3 }).run()
        },
    ]

    const setLink = () => {
        const link = prompt("give me link")
        editor.chain().focus().extendMarkRange('link').setLink({ href: link })
            .run()
    }
    const unsetLink = () => {
        editor.chain().focus().unsetLink().run()
    }

    return (
        <div className="flex items-center justify-between border-b py-8 mb-8 border-[#2c2c2c] bg-[#0f0f0f] sticky top-0 z-10">
            <div className="flex space-x-2">
                <div className="setting">Montserrat <span style={{ marginLeft: '8px' }}><ChevronDown color="#4b4b4b" size={18} /></span></div>
                <div className="setting"><span style={{ marginRight: '12px' }}><Minus color="#4b4b4b" size={18} /></span>12<span style={{ marginLeft: '12px' }}><Plus color="#4b4b4b" size={18} /></span></div>
            </div>
            <div className="flex space-x-2">
                <div className="bg-[#1b1c1d] border border-[#2c2c2c] p-1 flex rounded-lg">
                    {
                        basicFormatting.map((elem, index) => (
                            <SmallButtons key={index} onClick={elem.onclick} icon={elem.icon} />
                        ))
                    }
                </div>
                <div className="bg-[#1b1c1d] border border-[#2c2c2c] p-1 flex rounded-lg">
                    {
                        textAlignment.map((elem, index) => (
                            <SmallButtons key={index} onClick={elem.onclick} icon={elem.icon} />
                        ))
                    }
                </div>
                <div className="bg-[#1b1c1d] border border-[#2c2c2c] p-1 flex rounded-lg">
                    {
                        headings.map((elem, index) => (
                            <SmallButtons key={index} onClick={elem.onclick} icon={elem.icon} />
                        ))
                    }
                </div>
                <div className="bg-[#1b1c1d] border border-[#2c2c2c] p-1 flex rounded-lg">
                    <span className="aspect-square p-2 hover:bg-[#252525] rounded-lg cursor-pointer"><Image size={18} /></span>
                    {/* <span className="aspect-square p-2 hover:bg-[#252525] rounded-lg cursor-pointer" onClick={handleAddLink}><Link size={18} /></span> */}
                    {
                        !editor.isActive('link') ?
                        <span className="aspect-square p-2 hover:bg-[#252525] rounded-lg cursor-pointer" onClick={setLink}><Link size={18} /></span> :
                        <span className="aspect-square p-2 bg-[#252525] outline outline-1 outline-[#2c2c2c] hover:bg-[#202020] rounded-lg cursor-pointer text-blue-400" onClick={unsetLink}><Unlink size={18} /></span>

                    }
                    <span className="aspect-square p-2 hover:bg-[#252525] rounded-lg cursor-pointer"><Highlighter size={18} /></span>
                    <span className="aspect-square p-2 hover:bg-[#252525] rounded-lg cursor-pointer" onClick={() => editor.commands.toggleBlockquote().run()}><Quote size={18} /></span>
                </div>
                <div className="bg-[#1b1c1d] border border-[#2c2c2c] p-1 flex items-center rounded-lg">
                    <span className="aspect-square hover:bg-[#252525] rounded-lg cursor-pointer"><div className="size-[33px] rounded-md bg-blue-500 rounded-"></div></span>
                </div>
            </div>
        </div>
    )
}

export default Toolbar