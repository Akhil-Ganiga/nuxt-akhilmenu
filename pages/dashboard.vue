<template>
  <div class="dashboard_main">
    <header class="header">
      <div class="topsewc">
        <h1>
          <span><i class="fa-solid fa-cart-shopping"></i></span>Shop Manager
        </h1>
      </div>
      <div class="topryt">
        <p class="prifil">
          <i class="fa-solid fa-bell"></i><i class="fa-solid fa-user"></i>
        </p>
      </div>
    </header>
    <div class="dashboard">
      <!-- Shop Information -->
      <section class="shop-info">
        <div class="shop-details">
          <h2>Coffee Corner</h2>
          <p>123 Main St, Cityville, State 12345</p>
          <div class="actions">
            <button @click="addNewItem">+ Add New Item</button>
            <button class="edit_shop">
              <span><i class="fa-solid fa-pen-to-square"></i></span>Edit Shop
              Details
            </button>
            <button class="view_order">
              <span><i class="fa-solid fa-bars"></i></span>View Orders
            </button>
          </div>
        </div>
        <div class="shop-status">
          <span class="status">Open</span>
        </div>
      </section>

      <div class="content">
        <!-- Recent Orders Section -->
        <section class="recent-orders">
          <h3>Recent Orders</h3>
          <div class="filters">
            <select v-model="orderFilter">
              <option value="all">All Orders</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
            <input type="date" v-model="selectedDate" />
          </div>
          <div class="order" v-for="order in filteredOrders" :key="order.id">
            <div class="order-details">
              <strong>{{ order.name }}</strong>
              <p>{{ order.items }}</p>
            </div>
            <div class="order-status">
              <p>
                <span>{{ order.price }}</span>
              </p>
              <span :class="['status', order.status.toLowerCase()]">{{
                order.status
              }}</span>
            </div>
          </div>
        </section>

        <!-- Analytics Section -->
        <section class="analytics">
          <div class="analytics-header">
            <h3>Analytics</h3>
            <select v-model="analyticsFilter">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div class="placeholder_das">
            <p class="salesover">Sales Overview</p>
            <div class="placeholder">Sales Graph Placeholder</div>
            <p class="salesover">Popular Items</p>
            <div class="placeholder">Popular Items Placeholder</div>
            <p class="salesover">Customer Feedback</p>
            <div class="placeholder">Customer Feedback Placeholder</div>
          </div>
        </section>
      </div>
    </div>
    <footer class="footer_dashboard">
      <p>© 2025 Shop Manager. All rights reserved.</p>
      <div class="social-icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderFilter: "all",
      selectedDate: "",
      analyticsFilter: "daily",
      orders: [
        {
          id: 1,
          name: "John Doe",
          items: "2 x Cappuccino, 1 x Croissant",
          price: "$15.50",
          status: "Completed",
        },
        {
          id: 2,
          name: "Jane Smith",
          items: "1 x Latte, 1 x Muffin",
          price: "$9.75",
          status: "Pending",
        },
      ],
    };
  },
  computed: {
    filteredOrders() {
      return this.orders.filter((order) => {
        if (this.orderFilter === "all") return true;
        return order.status.toLowerCase() === this.orderFilter;
      });
    },
  },
  methods: {
    addNewItem() {
      alert("Add New Item clicked!");
    },
  },
};
</script>

<style scoped>
/* css starts */
.dashboard {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
  width: 94%;
  margin: 0 auto;
}
.dashboard_main {
  background: #f3f4f6;
  border: 2px solid #ccc;
  margin: 20px;
}
.actions button.edit_shop,
.actions button.view_order {
  background: #dbeafe;
  color: #2663eb;
}
.order-status span {
  font-size: 30px;
  font-weight: 600;
}
.topryt p.prifil {
  margin: 0;
}
.analytics-header h3 {
  font-size: 40px;
  font-weight: 700;
  margin: 0;
}
.analytics-header select {
  font-size: 28px;
  padding: 15px 0;
}
.header {
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 18px 99px;
  align-items: center;
}
.header h1 {
  font-size: 49px;
}
.header h1 span {
  padding-right: 14px;
  color: #2663eb;
}
.topryt i.fa-solid.fa-bell,
.topryt i.fa-solid.fa-user {
  font-size: 35px;
}
.placeholder_das p.salesover {
  font-size: 29px;
}
.topryt i.fa-solid.fa-user {
  padding-left: 26px;
}
.shop-info {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.shop-details h2 {
  margin: 0;
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 23px;
}
.shop-details p {
  font-size: 30px;
}
.actions button {
  margin: 5px;
  padding: 12px 28px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 34px;
  border-radius: 12px;
}
.actions span {
  padding-right: 14px;
}
.shop-details .actions {
  gap: 18px;
  display: flex;
}

.shop-status .status {
  background-color: #d1fbe6;
  color: #005940;
  padding: 12px 27px;
  border-radius: 31px;
  font-size: 31px;
}
.recent-orders h3 {
  font-size: 40px;
  font-weight: bold;
}
.content {
  display: flex;
  gap: 20px;
}

.recent-orders,
.analytics {
  flex: 1;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
}

.filters {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 28px 0;
}

.filters select,
.filters input {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 28px;
}
.order-details strong {
  font-size: 28px;
}
.order-details p {
  font-size: 24px;
}
.order {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding: 12px 0;
}
.order:last-child {
  border-bottom: unset;
}

.order-status .status {
  padding: 8px 24px;
  border-radius: 21px;
}

.completed {
  background-color: #d1fbe6;
  color: #28a745;
}
.order-status {
  text-align: right;
}
.pending {
  background-color: #fff3c7;
  color: #8c3703;
}

.analytics .placeholder {
  background: #e6e7eb;
  border-radius: 8px;
  margin-bottom: 18px;
  text-align: center;
  padding: 122px 0;
  font-size: 30px;
  color: #626a79;
}
footer.footer_dashboard {
  background: #1f2937;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 15px 79px;
}
footer.footer_dashboard p {
  margin: 0;
  font-size: 26px;
}
.footer_dashboard i {
  font-size: 31px;
  padding: 0 10px;
}
.analytics-header {
  margin-bottom: 15px;
}
.placeholder_das {
  display: grid;
}
footer {
  margin-top: 20px;
  text-align: center;
}

.social-icons i {
  margin: 0 5px;
  cursor: pointer;
}
/* css ends */
/* resposive starts */
@media screen and (max-width: 2000px) {
  .header h1 {
    font-size: 38px;
  }
  .header {
    padding: 18px 67px;
  }
  .topryt i.fa-solid.fa-bell,
  .topryt i.fa-solid.fa-user {
    font-size: 26px;
  }
  .shop-details h2 {
    font-size: 35px;
    padding-bottom: 15px;
  }
  .shop-details p {
    font-size: 20px;
  }
  .shop-status .status {
    padding: 8px 26px;
    font-size: 20px;
  }
  .actions button {
    padding: 10px 22px;
    font-size: 20px;
  }
  .recent-orders h3,
  .analytics-header h3 {
    font-size: 27px;
  }
  .recent-orders,
  .analytics {
    padding: 23px;
  }
  .filters select,
  .filters input,
  .order-details strong,
  .analytics-header select,
  .placeholder_das p.salesover {
    font-size: 21px;
  }
  .filters {
    padding: 16px 0;
  }
  .order-details p {
    font-size: 18px;
  }
  .order-status span {
    font-size: 17px;
  }
  .analytics .placeholder {
    padding: 92px 0;
    font-size: 21px;
  }
  footer.footer_dashboard p {
    font-size: 20px;
  }
  .footer_dashboard i {
    font-size: 20px;
    padding: 0 4px;
  }
  footer.footer_dashboard {
    padding: 13px 64px;
  }
}

@media screen and (max-width: 1600px) {
  .header h1 {
    font-size: 30px;
  }
  .topryt i.fa-solid.fa-bell,
  .topryt i.fa-solid.fa-user,
  .topsewc i.fa-solid.fa-cart-shopping {
    font-size: 25px;
  }
  .header {
    padding: 13px 75px;
  }
  .shop-details h2 {
    font-size: 30px;
    padding-bottom: 14px;
  }
  .shop-details p {
    font-size: 17px;
  }
  .actions button {
    padding: 11px 23px;
    font-size: 16px;
  }
  .recent-orders h3,
  .analytics-header h3 {
    font-size: 24px;
  }
  .filters select,
  .filters input,
  .order-details strong,
  .analytics-header select,
  .placeholder_das p.salesover {
    font-size: 18px;
  }
  footer.footer_dashboard p {
    font-size: 17px;
  }
  .footer_dashboard i {
    font-size: 20px;
    padding: 0 4px;
  }
  .analytics .placeholder {
    padding: 87px 0;
    font-size: 19px;
  }
  .shop-status .status {
    padding: 8px 26px;
    font-size: 18px;
  }
}
@media screen and (max-width: 1400px) {
  .header h1 {
    font-size: 25px;
  }
  .topryt i.fa-solid.fa-bell,
  .topryt i.fa-solid.fa-user,
  .topsewc i.fa-solid.fa-cart-shopping {
    font-size: 22px;
  }
  .header {
    padding: 10px 70px;
  }
  .shop-details h2 {
    font-size: 25px;
    padding-bottom: 12px;
  }
  .shop-details p {
    font-size: 15px;
  }
  .actions button {
    padding: 10px 20px;
    font-size: 16px;
  }
  .recent-orders h3,
  .analytics-header h3 {
    font-size: 23px;
  }
  .filters select,
  .filters input,
  .order-details strong,
  .analytics-header select,
  .placeholder_das p.salesover {
    font-size: 16px;
  }
  footer.footer_dashboard p {
    font-size: 15px;
  }
  .footer_dashboard i {
    font-size: 16px;
    padding: 0 4px;
  }
  .analytics .placeholder {
    padding: 58px 0;
    font-size: 13px;
  }
  .shop-status .status {
    padding: 8px 26px;
    font-size: 16px;
  }
  .actions button {
    padding: 7px 15px;
    font-size: 13px;
  }
  .shop-details .actions {
    gap: 8px;
  }
  .shop-info {
    padding: 20px;
  }
}
@media screen and (max-width: 990px) {
  .header {
    padding: 10px 43px;
  }
  .analytics .placeholder {
    padding: 25px 0;
    font-size: 12px;
  }
  .order-status .status {
    padding: 8px 8px;
    font-size: 13px;
  }
}
/* mobile */
@media screen and (max-width: 767px) {
  .content {
    flex-wrap: wrap;
  }
  .header {
    padding: 10px 25px;
  }
  .header h1 {
    font-size: 21px;
  }
  .topryt i.fa-solid.fa-bell,
  .topryt i.fa-solid.fa-user,
  .topsewc i.fa-solid.fa-cart-shopping {
    font-size: 18px;
  }
  .dashboard {
    padding: 14px;
    width: 100%;
  }
  .shop-details h2 {
    font-size: 21px;
    padding-bottom: 6px;
  }
  .shop-status .status {
    padding: 5px 11px;
    font-size: 10px;
  }
  .shop-details p {
    font-size: 13px;
    margin-bottom: 7px;
  }
  .shop-details .actions {
    gap: 0px;
    flex-wrap: wrap;
  }
  .actions button {
    padding: 5px 14px;
    font-size: 13px;
  }
  .recent-orders,
  .analytics {
    padding: 17px;
  }
  .recent-orders h3,
  .analytics-header h3 {
    font-size: 20px;
  }
  .filters select,
  .filters input,
  .order-details strong,
  .analytics-header select,
  .placeholder_das p.salesover {
    font-size: 14px;
  }
  .filters {
    padding: 10px 0;
    margin-bottom: 0;
  }
  .order-details p {
    font-size: 11px;
  }
  .order-status span {
    font-size: 13px;
  }
  .order-status .status {
    padding: 5px 13px;
    font-size: 11px;
  }
  .order {
    padding: 8px 0;
  }
  .analytics-header {
    margin-bottom: 0px;
  }
  .placeholder_das p.salesover {
    margin-bottom: 6px;
  }
  footer.footer_dashboard p {
    font-size: 12px;
  }
  footer.footer_dashboard {
    padding: 7px 20px;
  }
  .footer_dashboard i {
    font-size: 13px;
    padding: 0px;
  }
}
@media screen and (max-width: 350px) {
  .header h1 {
    font-size: 19px;
  }
  .header {
    padding: 10px 14px;
    margin-bottom: 3px;
  }
  .shop-info {
    padding: 11px;
  }
  .shop-details h2 {
    font-size: 18px;
    padding-bottom: 3px;
  }
  .actions button {
    padding: 5px 12px;
    font-size: 10px;
  }
  .filters select,
  .filters input,
  .order-details strong,
  .analytics-header select,
  .placeholder_das p.salesover {
    font-size: 11px;
  }
  footer.footer_dashboard {
    padding: 7px 5px;
    align-items: center;
  }
  footer.footer_dashboard p {
    font-size: 11px;
  }
  .footer_dashboard i {
    font-size: 9px;
  }
}
/* resposive ends */
</style>
