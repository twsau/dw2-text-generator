export const Default = () => (
  <>
    <div className="row">
      <label>{translate("colour")}</label>
      <input
        onChange={(event) => setColor(event.target.value)}
        type="color"
        value={color}
      />
      <label>{translate("size")}</label>
      <input
        max="50"
        min="1"
        onChange={(event) => setSize(event.target.value)}
        type="number"
        value={size}
      />
    </div>
    <div className="row">
      <button disabled={input === ""} onClick={() => setInput("")}>
        {translate("clear")}
      </button>
      <button disabled={input === ""} onClick={generate} type="submit">
        {translate("generate")}
      </button>
    </div>
  </>
);
