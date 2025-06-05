// "use client"

// import React from "react"
// import { useEditor, EditorContent } from "@tiptap/react"
// import StarterKit from "@tiptap/starter-kit"
// import Color from "@tiptap/extension-color"
// import TextStyle from "@tiptap/extension-text-style"
// import ListItem from "@tiptap/extension-list-item"
// import './style.css'

// // React icons
// import { FaBold, FaItalic, FaStrikethrough, FaCode, FaHeading, FaListUl, FaListOl, FaQuoteRight, FaUndo, FaRedo, FaEraser, FaMinus } from "react-icons/fa"
// import { MdOutlineClear } from "react-icons/md"
// import { BsCircleFill } from "react-icons/bs"
// import { Editor } from '@tiptap/core'
// import { LucideKanbanSquareDashed } from "lucide-react"

// const MenuBar = ({ editor }: { editor: Editor }) => {
//   if (!editor) return null

//   return (
//     <div className="toolbar">
//       <button onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'active' : ''}><FaBold /></button>
//       <button onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'active' : ''}><FaItalic /></button>
//       <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'active' : ''}><FaStrikethrough /></button>
//       <button onClick={() => editor.chain().focus().toggleCode().run()} className={editor.isActive('code') ? 'active' : ''}><FaCode /></button>
//       <button onClick={() => editor.chain().focus().unsetAllMarks().run()}><MdOutlineClear /></button>
//       <button onClick={() => editor.chain().focus().clearNodes().run()}><FaEraser /></button>
//       <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'active' : ''}><FaHeading /></button>
//       <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'active' : ''}><FaListUl /></button>
//       <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={editor.isActive('orderedList') ? 'active' : ''}><FaListOl /></button>
//       <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={editor.isActive('blockquote') ? 'active' : ''}><FaQuoteRight /></button>
//       <button onClick={() => editor.chain().focus().setHorizontalRule().run()}><FaMinus /></button>
//       <button onClick={() => editor.chain().focus().setHardBreak().run()}><LucideKanbanSquareDashed /></button>
//       <button onClick={() => editor.chain().focus().undo().run()}><FaUndo /></button>
//       <button onClick={() => editor.chain().focus().redo().run()}><FaRedo /></button>
//       <button onClick={() => editor.chain().focus().setColor('#ff0000').run()}><BsCircleFill style={{ color: '#ff0000' }} /></button>
//       <button onClick={() => editor.chain().focus().setColor('#0000ff').run()}><BsCircleFill style={{ color: '#0000ff' }} /></button>
//     </div>
//   )
// }

// const extensions = [
//   Color.configure({ types: [TextStyle.name, ListItem.name] }),
//   TextStyle,
//   ListItem,
//   StarterKit.configure({
//     bulletList: { keepMarks: true },
//     orderedList: { keepMarks: true },
//   }),
// ]

// const MyEditor = () => {
//   const editor = useEditor({
//     extensions,
//     content: "",
//     onUpdate({ editor }) {
//       console.log("Editor content:", editor.getHTML())
//     },
//   })

//   return (
//     <div className="editor-wrapper">
//       <MenuBar editor={editor} />
//       <EditorContent editor={editor} className="editor-content" />
//     </div>
//   )
// }

// export default MyEditor
