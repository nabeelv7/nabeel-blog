import CodeBlock from "./components/CodeBlock"

const components = {
  code: ({ children, className }) => {
    return (
      <CodeBlock className={className}>{children}</CodeBlock>
    )
  },
}

export function useMDXComponents() {
  return components
}
