import "./MessageBox.css";

interface MessageBoxProps {
  code: number;
  message: string;
  onClose?: () => void;
}

export default function MessageBox({ code, message }: MessageBoxProps) {
  return (
    <div className={`message-box ${code === 0 ? "success" : "error"}`}>
      <h2>{code === 0 ? "Успех" : "Ошибка"}</h2>
      <h2>{message}</h2>
    </div>
  );
}