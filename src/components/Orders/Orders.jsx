import React from "react";
import { Search, Filter, BellDot, LogOut, Clock, CheckCircle } from "lucide-react";

function Orders() {
  const orderDetails = {
    name: "Naga Pavan",
    mobile: "9876543210",
    address: "Balaji Nagar, Hyderabad",
  };

  const orders = [
    {
      id: "#01",
      category: "Biscuit",
      item: "Fine Biscuit",
      image: "/api/placeholder/100/100",
      quantity: 5,
      cost: "Rs. 500",
      status: "Pending",
      canCancel: true,
    },
    {
      id: "#02",
      category: "Biscuit",
      item: "Fine Biscuit",
      image: "/api/placeholder/100/100",
      quantity: 5,
      cost: "Rs. 500",
      status: "Completed",
      canCancel: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white">
            ← Back
          </button>
          <h1 className="text-2xl font-bold text-purple-900">My Orders</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-96 rounded-lg bg-gray-200 py-2 pl-4 pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <button className="rounded-full bg-blue-600 p-2 text-white">
            <BellDot size={24} />
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white">
            <LogOut size={20} />
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <div className="w-64 flex-shrink-0">
          <button className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white">
            <Filter size={20} />
            Filters
          </button>
          <div className="rounded-lg bg-white p-4">
            <div className="space-y-6">
              {/* Category */}
              <div>
                <h3 className="mb-2 text-lg font-semibold">Category</h3>
                <div className="space-y-2">
                  {["Biscuit", "Chocolate", "Others"].map((category) => (
                    <label key={category} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="mb-2 text-lg font-semibold">Price Range</h3>
                <div className="space-y-2">
                  <div>
                    <p className="mb-1 text-sm text-gray-600">From</p>
                    <input
                      type="text"
                      placeholder="₹100"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <p className="mb-1 text-sm text-gray-600">To</p>
                    <input
                      type="text"
                      placeholder="₹500"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    />
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="mb-2 text-lg font-semibold">Sort By</h3>
                <div className="space-y-2">
                  {["Newest first", "Quantity", "Price"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="sort"
                        className="border-gray-300"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-lg bg-white">
            {/* Table Header */}
            <div className="grid grid-cols-8 bg-gray-100 px-4 py-3 font-semibold text-gray-700">
              <div>Category</div>
              <div>Order Id</div>
              <div>Item</div>
              <div>Item Name</div>
              <div>Quantity</div>
              <div>Cost</div>
              <div>Order Status</div>
              <div>Cancellation</div>
            </div>

            {/* Customer Details */}
            <div className="border-b px-4 py-3">
              <div className="flex items-center gap-6">
                <span className="font-semibold">Details:</span>
                <span>Name: {orderDetails.name}</span>
                <span>Mobile: {orderDetails.mobile}</span>
                <span>Address: {orderDetails.address}</span>
              </div>
            </div>

            {/* Order Items */}
            {orders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-8 items-center border-b px-4 py-3"
              >
                <div>{order.category}</div>
                <div>{order.id}</div>
                <div>
                  <img
                    src={order.image}
                    alt={order.item}
                    className="h-16 w-16 rounded object-cover"
                  />
                </div>
                <div>{order.item}</div>
                <div>{order.quantity}</div>
                <div>{order.cost}</div>
                <div>
                  <div className="flex items-center gap-2">
                    {order.status === "Pending" ? (
                      <>
                        <Clock className="text-yellow-500" size={20} />
                        <span>Pending...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="text-green-500" size={20} />
                        <span>Completed</span>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  {order.canCancel && (
                    <button className="rounded bg-red-500 px-4 py-2 text-white">
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;