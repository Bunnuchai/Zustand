type Props = { onDrop: () => void };

export default function DropButton({ onDrop }: Props) {
  return (
    <button onClick={onDrop} style={{ marginLeft: 8, color: "red" }}>
      ถอน
    </button>
  );
}
