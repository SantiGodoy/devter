import { colors } from "styles/theme"

export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          border: 0;
          background: ${colors.black};
          display: flex;
          align-items: center;
          color: ${colors.white};
          font-size: 16px;
          border-radius: 9999px;
          cursor: pointer;
          font-weight: 600;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }

        button > :global(svg) {
          margin-right: 8px;
        }

        button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  )
}
