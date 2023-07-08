function Main() {
  return (
    <>
      <main>

        <section className="panel">
          <img className="bed" src="./public/background1.png" alt="bed image" />
        </section>

        <div className="columns half">
          <div className="col left">
            <h3>Monthly Visitors</h3>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no.
            </p>
          </div>
          <div className="col">
            <ul className="data secondary">
              <li>
                <h3>Monthly</h3>
                <p>$1,201.00</p>
              </li>
              <li>
                <h3>Quarterly</h3>
                <p>$5,737.60</p>
              </li>
              <li>
                <h3>Annually</h3>
                <p>$30,261.10</p>
              </li>
              <li>
                <h3>Quarterly</h3>
                <p>$5,201.00</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main
