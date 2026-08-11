type SubtitleProps = {
  children: React.ReactNode;
  centered?: boolean;
  light?: boolean;
};

export default function Subtitle({
  children,
  centered = false,
  light = false,
}: SubtitleProps) {
  if (centered) {
    return (
      <div className="subtitle">
        <div className="line-subtitle">
          <div className={light ? "line-horizontal light" : "line-horizontal"} />
          <div className={light ? "circle light" : "circle"} />
        </div>
        <div className={light ? "text-subtitle light" : "text-subtitle"}>
          {children}
        </div>
        <div className="line-subtitle">
          <div className={light ? "circle light" : "circle"} />
          <div className={light ? "line-horizontal light" : "line-horizontal"} />
        </div>
      </div>
    );
  }
  return (
    <div className="subtitle">
      <div className="line-subtitle">
        <div className="line-horizontal" />
        <div className="circle" />
      </div>
      <div className="text-subtitle">{children}</div>
    </div>
  );
}
