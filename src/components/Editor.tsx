import { useEffect, useRef } from 'react'
import { Crepe } from '@milkdown/crepe'
import '@milkdown/crepe/theme/common/style.css'
import '@milkdown/crepe/theme/frame.css'
import './Editor.css'

function Editor() {
  const editorRef = useRef<HTMLDivElement>(null)
  const crepeRef = useRef<Crepe | null>(null)

  useEffect(() => {
    if (!editorRef.current) return

    const crepe = new Crepe({
      root: editorRef.current,
      defaultValue: '# 欢迎使用 AeroNote\n\n开始编写你的笔记...',
    })

    crepe.create().then(() => {
      crepeRef.current = crepe
      console.log('Milkdown Crepe 编辑器已初始化')
    })

    return () => {
      crepe.destroy()
    }
  }, [])

  return (
    <div className="editor-container">
      <div ref={editorRef} className="editor" />
    </div>
  )
}

export default Editor
