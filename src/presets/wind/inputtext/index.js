export default {
  root: ({props:e,context:r,parent:t})=>({class:["font-sans leading-6","m-0",{"py-3 px-4 text-lg sm:text-md":e.size=="large","py-1 px-2 sm:text-sm":e.size=="small","py-1.5 px-3 sm:text-sm":e.size==null},"text-surface-900 dark:text-surface-0","placeholder:text-surface-400 dark:placeholder:text-surface-500","bg-surface-0 dark:bg-surface-900","shadow-sm",{"ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0":t.instance.$name!=="InputGroup"},{"rounded-md":t.instance.$name!=="InputGroup"},{"first:rounded-l-md rounded-none last:rounded-r-md":t.instance.$name=="InputGroup"},{"border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-600":t.instance.$name=="InputGroup"},{"first:ml-0 ml-[-1px]":t.instance.$name=="InputGroup"&&!e.showButtons},"appearance-none",{"outline-none focus:ring-primary-500 dark:focus:ring-primary-400":!r.disabled,"opacity-60 select-none pointer-events-none cursor-default":r.disabled}]})
}