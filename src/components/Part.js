import React, { Component } from "react";

const styles = {
  availRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2rem",
    borderBottom: "solid grey 1px",
    fontSize: "2rem"
  },
  descRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2rem",
    borderBottom: "solid grey 1px",
    fontSize: "2rem"
  },
  manuRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2rem",
    borderBottom: "solid grey 1px",
    fontSize: "2rem"
  },
  priceRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2rem",
    borderBottom: "solid grey 1px",
    fontSize: "2rem"
  },
  uaRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "2rem",
    borderBottom: "solid grey 1px",
    fontSize: "2rem"
  }
};

class PartComponent extends Component {
  renderImages(images) {
    return images.map((image, idx) => {
      return (
        <div>
          <div
            style={{
              margin: "3rem 0rem 2rem 2rem",
              fontSize: "2rem",
              borderBottom: "solid orange 1px",
              width: "80%"
            }}
          >{`Image # ${idx + 1}`}</div>
          <img src={image} style={{ margin: "2rem" }} alt="empty img" />
        </div>
      );
    });
  }

  renderUserArea() {
    const { UserArea } = this.props.part;
    const refObj = UserArea[0];
    const dataList = Object.keys(UserArea[0]);

    return dataList.map(datum => {
      const shouldRenderImages =
        typeof refObj[datum][0].ImageUrl !== "undefined";

      if (!shouldRenderImages) {
        const data = refObj[datum][0];
        return (
          <div style={styles.uaRow}>
            <div>{`${datum}: `}</div>
            <div>{`${data} `}</div>
          </div>
        );
      } else {
        return this.renderImages(refObj[datum][0].ImageUrl);
      }
    });
  }

  render() {
    const { Availability, Description, Manufacturer, Price } = this.props.part;

    return (
      <div style={{ width: "40rem" }}>
        <div style={styles.availRow}>
          <div>Availability</div>
          <div>{`${Availability[0]}`}</div>
        </div>
        <div style={styles.descRow}>
          <div>Description</div>
          <div>{`${Description[0]}`}</div>
        </div>
        <div style={styles.descRow}>
          <div>Manufacturer</div>
          <div>{`${Manufacturer[0]}`}</div>
        </div>
        <div style={styles.priceRow}>
          <div>Price</div>
          <div>{`List: $${Price[0].ListPrice[0]}`}</div>
          <div>{`Core: $${Price[0].CoreCost[0]}`}</div>
        </div>
        {this.renderUserArea()}
        <div />
      </div>
    );
  }
}

export const Part = PartComponent;
