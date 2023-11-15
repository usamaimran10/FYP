import React from "react";

const OrderList = () => {
  const GotoCart = () => {
    window.location.href = "/cart";
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", marginTop: "20px" }}>Your Order List</h1>
      </div>
      <div
        class="list-group"
        id="myList"
        role="tablist"
        onClick={GotoCart}
        style={{
          marginTop: "30px",
          width: "100%",
          alignItems: "center",
          fontSize: "2REM",
          justifyContent: "center",
        }}
      >
        <a
          class="list-group-item list-group-item-action active"
          data-toggle="list"
          href="#home"
          role="tab"
        >
          Ambuja Cement
        </a>
        <a
          class="list-group-item list-group-item-action"
          data-toggle="list"
          href="#profile"
          role="tab"
        >
          H.N Sanitary
        </a>
        <a
          class="list-group-item list-group-item-action"
          data-toggle="list"
          href="#messages"
          role="tab"
        >
          Ahmad Tiles
        </a>
        <a
          class="list-group-item list-group-item-action"
          data-toggle="list"
          href="#settings"
          role="tab"
        >
          GM Cables
        </a>
      </div>

      <div class="tab-content">
        <div class="tab-pane active" id="home" role="tabpanel">
          ...
        </div>
        <div class="tab-pane" id="profile" role="tabpanel">
          ...
        </div>
        <div class="tab-pane" id="messages" role="tabpanel">
          ...
        </div>
        <div class="tab-pane" id="settings" role="tabpanel">
          ...
        </div>
      </div>
    </>
  );
};

export default OrderList;
