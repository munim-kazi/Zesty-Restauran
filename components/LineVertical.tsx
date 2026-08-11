type LineVerticalProps = {
  variant?: "top" | "bottom";
};

export default function LineVertical({ variant = "top" }: LineVerticalProps) {
  if (variant === "bottom") {
    return (
      <div className="line">
        <div className="circle" />
        <div className="circle-large top-margin" />
        <div className="line-vertical" />
        <div className="circle" />
      </div>
    );
  }
  return (
    <div className="line">
      <div className="circle" />
      <div className="line-vertical" />
      <div className="circle-large" />
      <div className="circle" />
    </div>
  );
}
