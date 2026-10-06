// Abre em nova aba com segurança (noopener) e avisa o leitor de tela
export default function ExternalLink({ href, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}{' '}
      <span className="srOnly">(abre em nova aba)</span>
    </a>
  );
}
