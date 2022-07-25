import React from "react";
import posting from "./../img/undraw_posting_photo.svg";

const Dashboard = () => {
  const colors = [
    {
      type: "Primary",
      back: "card bg-primary text-white shadow",
      code: "#4e73df",
    },
    {
      type: "Success",
      back: "card bg-success text-white shadow",
      code: "#1cc88a",
    },
    {
      type: "Info",
      back: "card bg-info text-white shadow",
      code: "#36b9cc",
    },
    {
      type: "Warning",
      back: "card bg-warning text-white shadow",
      code: "#f6c23e",
    },
    {
      type: "Danger",
      back: "card bg-danger text-white shadow",
      code: "#e74a3b",
    },
    {
      type: "Secondary",
      back: "card bg-secondary text-white shadow",
      code: "#858796",
    },
    {
      type: "Light",
      back: "card bg-light text-white shadow",
      code: "#f8f9fc",
    },
    {
      type: "Dark",
      back: "card bg-dark text-white shadow",
      code: "#5a5c69",
    },
  ];

  const projects = [
    {
      projectType: "Server Migration",
      percent: "20%",
      valNow: "20",
      back: "progress-bar bg-danger",
    },
    {
      projectType: "Sales Tracking",
      percent: "40%",
      valNow: "40",
      back: "progress-bar bg-warning",
    },
    {
      projectType: "Customer Database",
      percent: "60%",
      valNow: "60",
      back: "progress-bar bg-primary",
    },
    {
      projectType: "Payout Details",
      percent: "80%",
      valNow: "280",
      back: "progress-bar bg-info",
    },
    {
      projectType: "Account Setup",
      percent: "100%",
      valNow: "100",
      back: "progress-bar bg-success",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Earnings (Monthly)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Earnings (Annual)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $215,000
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Monthly) Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Tasks
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          50%
                        </div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pending Requests Card Example --> */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending Requests
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      18
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Content Row --> */}

        <div className="row">
          {/* <!-- Area Chart --> */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Earnings Overview
                </h6>
                <div className="dropdown no-arrow">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Card Body --> */}
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="myAreaChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Pie Chart --> */}
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              {/* <!-- Card Header - Dropdown --> */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Revenue Sources
                </h6>
                <div className="dropdown no-arrow">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <div className="dropdown-header">Dropdown Header:</div>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- Card Body --> */}
              <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                  <canvas id="myPieChart"></canvas>
                </div>
                <div className="mt-4 text-center small">
                  <span className="mr-2">
                    <i className="fas fa-circle text-primary"></i> Direct
                  </span>
                  <span className="mr-2">
                    <i className="fas fa-circle text-success"></i> Social
                  </span>
                  <span className="mr-2">
                    <i className="fas fa-circle text-info"></i> Referral
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Content Row --> */}
        <div className="row">
          {/* <!-- Content Column --> */}
          <div className="col-lg-6 mb-4">
            {/* <!-- Project Card Example --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
              </div>
              <div className="card-body">
                {projects.map((ele, i) => (
                  <div key={i}>
                    <h4 className="small font-weight-bold">
                      {ele.projectType}
                      <span className="float-right">{ele.percent}</span>
                    </h4>
                    <div className="progress mb-4">
                      <div
                        className={ele.back}
                        role="progressbar"
                        style={{ width: ele.percent }}
                        aria-valuenow={ele.valNow}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <!-- Color System --> */}

            <div className="row">
              {colors.map((ele, i) => (
                <div className="col-lg-6 mb-4" key={i}>
                  <div className={ele.back}>
                    <div className="card-body">
                      {ele.type}
                      <div className="text-white-50 small">{ele.code}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            {/* <!-- Illustrations --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Illustrations
                </h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    style={{ width: "25rem" }}
                    src={posting}
                    alt="..."
                  />
                </div>
                <p>
                  Add some quality, svg illustrations to your project courtesy
                  of{" "}
                  <a target="_blank" rel="nofollow" href="https://undraw.co/">
                    unDraw
                  </a>
                  , a constantly updated collection of beautiful svg images that
                  you can use completely free and without attribution!
                </p>
                <a target="_blank" rel="nofollow" href="https://undraw.co/">
                  Browse Illustrations on unDraw &rarr;
                </a>
              </div>
            </div>

            {/* <!-- Approach --> */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Development Approach
                </h6>
              </div>
              <div className="card-body">
                <p>
                  SB Admin 2 makes extensive use of Bootstrap 4 utility
                  classNamees in order to reduce CSS bloat and poor page
                  performance. Custom CSS classNamees are used to create custom
                  components and custom utility classNamees.
                </p>
                <p className="mb-0">
                  Before working with this theme, you should become familiar
                  with the Bootstrap framework, especially the utility
                  classNamees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
