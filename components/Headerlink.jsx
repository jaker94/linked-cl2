function Headerlink({ Icon, text, avatar, feed }) {
  return (
    <div
      className={`headerLinkParent
    ${
      feed
        ? "headerLinkFeedPresent"
        : "headerLinkFeedAbsent"
    }`}
    >
      {avatar ? <Icon sx={{ fontSize: 30 }} /> : <Icon />}

      <h4 className="text-sm"> {text} </h4>
    </div>
  );
}

export default Headerlink;
