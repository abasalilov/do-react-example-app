import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Spinner from "react-easy-spinner";
import { Part } from "./Part";

const headers = {
  "x-requested-with": "XMLHttpRequest",
  "x-access-token":
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1YzFlZWFiZTM1ZGNlOTM4ZDM1NTc1ODEiLCJleHAiOjE1NzcwNjYwNDYyMTZ9.oBKZp6Snq0M09ahr7ES4BuddTgeaR3sUJ5FxygfubaM"
};

const localReq = axios.create({
  headers
});

const settings = {
  shape: "cog",
  animation: "spin",
  time: "2s",
  duration: "infinite",
  opacity: "0.3",
  position: "inherit",
  elColor: "#e75b24"
};

const style = {
  select: {
    margin: "3rem",
    fontSize: "1rem",
    width: "25%"
  },
  reqOption: {
    margin: "3rem",
    fontSize: "1rem"
  },
  year: {
    margin: "1rem",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  container: {
    border: "solid blue 2px"
  },
  title: {
    border: "solid blue",
    width: "50%",
    height: "60rem",
    display: "flex",
    justifyContent: "center",
    overflowY: "scroll"
  },
  spinner: {
    border: "solid red 3px",
    width: "30rem !important"
  }
};

class TestControlComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: null,
      years: ["2019", "2018", "2017", "2016", "2015"],
      makes: ["Ford", "Toyota", "Nissan", "Gir"],
      models: ["2.0", "2.1", "2.2", "2.3"]
    };
  }

  async componentDidMount() {}

  renderPartsList() {
    return this.props.parts.map((part, idx) => (
      <div>
        <div
          style={{
            margin: "2rem 0rem",
            fontSize: "2rem",
            borderBottom: "solid orange 4px",
            width: "100%"
          }}
        >{`Search Result #${idx + 1}`}</div>
        <Part part={part} />
      </div>
    ));
  }

  renderList(list, handleChange) {
    return (
      <select onChange={handleChange}>
        {list.map(i => (
          <option style={style.reqOption} key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    );
  }

  render() {
    return (
      <div className="container-fluid" style={style.title}>
        <div className="row">
          <div className="paragraph">Results/Errors</div>
          {this.props.pending && (
            <Spinner style={style.spinner} {...settings} />
          )}
          {this.props.result && this.renderPartsList()}
        </div>
      </div>
    );
  }
}

const extraPart = {
  Manufacturer: ["STP"],
  Price: [{ ListPrice: ["12.31"], CoreCost: ["0.0"] }],
  Description: ["Oil Filter"],
  Availability: ["Available"],
  UserArea: [
    {
      PartTypeName: ["Oil Filter"],
      InformationImage: [
        {
          ImageUrl: [
            "http://econtent.autozone.com:24999/znetcs/product-info/en/us/chl/s9972/image/4/",
            "http://econtent.autozone.com:24999/znetcs/additional-prod-images/en/us/chl/s9972/18/image/4/",
            "http://econtent.autozone.com:24999/znetcs/additional-prod-images/en/us/chl/s9972/19/image/4/",
            "http://econtent.autozone.com:24999/znetcs/additional-prod-images/en/us/chl/s9972/06/image/4/"
          ]
        }
      ],
      Warranty: [""],
      YourPrice: ["6.19"],
      PartNumber: ["S9972"],
      QuickNotes: [""],
      TechNotes: [""],
      LineCode: ["CHL"],
      ItemNumber: ["831645"],
      StoreAvailable: ["4"],
      InNetworkAvail: ["23"],
      HubAvail: ["26"],
      OEMData: [""]
    }
  ]
};
const mapStateToProps = state => {
  const {
    search: { result, pending, parts }
  } = state;
  return {
    result,
    pending,
    parts
  };
};

export const TestControls = connect(
  mapStateToProps,
  null
)(TestControlComponent);
