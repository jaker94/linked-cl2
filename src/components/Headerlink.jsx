function Headerlink({ Icon, text, avatar, feed, active, hidden }) {
  return (
    <div
      className={`${hidden && "hidden md:inline-flex"} headerLinkParent
    ${feed ? "headerLinkFeedPresent" : "headerLinkFeedAbsent"} ${
        active && "!text-black dark:!text-white"
      }`}
    >
      {avatar ? <Icon sx={{ fontSize: 30 }} /> : <Icon />}

      <h4
        className={`text-sm ${
          feed && "hidden lg:flex justify-center w-full mx-auto"
        }`}
      >
        {text}
      </h4>
      {active && (
        <span className="hidden lg:inline-flex h-0.5 w-[calc(100%+20px)] bg-black dark:bg-white rounded-t-full" />
      )}
    </div>
  );
}

export default Headerlink;
