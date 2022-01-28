import React, { MouseEvent, ChangeEvent, DragEvent, useState, useRef } from 'react';

export default function EventsExample() {
  const [value, setValue] = useState<string>('')
  const [isDrag, setDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('the first input: ', value);
    console.log('the second input: ', inputRef.current?.value);
  }

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log('onDrag')
  }

  const dropHandler = (e: DragEvent<HTMLDivElement>) => {    
    e.preventDefault()
    setDrag(false)
  }

  const DragOverHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(true)
  }

  const DragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDrag(false)
  }

  return (
    <div>
      <input type={'text'} value={value} onChange={onChange} placeholder='controled input'/>
      <input ref={inputRef} placeholder='not controled input'/>
      <button onClick={onClick}>Click here</button>
      <hr />
      <div onDrag={dragHandler} draggable style={{ width: 200, height: 200, backgroundColor: 'red'}}/>
      <hr />
      <div
        onDrop={dropHandler}
        onDragOver={DragOverHandler}
        onDragLeave={DragLeaveHandler}
        style={{ width: 200, height: 200, backgroundColor: isDrag ? 'green' : 'red'}}
      />
      <hr />
    </div>
  )
}
