type ByteAvatarProps = {
  size?: "brand" | "small" | "medium" | "large";
  label?: string;
};

export function ByteAvatar({ size = "medium", label = "Byte, your coding guide" }: ByteAvatarProps) {
  return (
    <span className={`byte-avatar avatar-${size}`} role="img" aria-label={label}>
      <span className="byte-avatar-art" aria-hidden="true">
        <span className="byte-antenna"><i /></span>
        <span className="byte-ear byte-ear-left"><i /></span>
        <span className="byte-ear byte-ear-right"><i /></span>
        <span className="byte-head">
          <span className="byte-face">
            <i className="byte-eye byte-eye-left" />
            <i className="byte-eye byte-eye-right" />
            <i className="byte-mouth" />
          </span>
          <i className="byte-cheek byte-cheek-left" />
          <i className="byte-cheek byte-cheek-right" />
        </span>
        <span className="byte-neck" />
        <span className="byte-body">
          <span className="byte-display">&lt;/&gt;</span>
          <i className="byte-button byte-button-left" />
          <i className="byte-button byte-button-right" />
        </span>
        <span className="byte-arm byte-arm-left" />
        <span className="byte-arm byte-arm-right" />
        <span className="byte-foot byte-foot-left" />
        <span className="byte-foot byte-foot-right" />
      </span>
    </span>
  );
}
