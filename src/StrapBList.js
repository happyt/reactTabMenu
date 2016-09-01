const StrapBList = props => {
    const strapList = renderStraps(props.straps);

    return (
        <section>
        <div><h1>Functional straps</h1></div>
        <div>
            { strapList }
        </div>
        </section>
    );
};

const renderStraps = straps => (
  straps.map(strap => this.renderSingleLine(strap))
);

const renderSingleLine = strap => (
    <div>
      <span>{strap.title}, {strap.text}</span>
    </div>
);