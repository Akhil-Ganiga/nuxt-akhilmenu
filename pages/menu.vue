<template>
  <div class="menuitems">
    <div class="menu-management">
      <h1>Menu Management</h1>
      <div class="menuss">
        <button @click="addNewItem" class="add-button">+ Add New Item</button>
        <div v-for="(item, index) in menuItems" :key="index" class="menu-item">
          <div class="item-details">
            <img :src="item.icon" alt="Icon" class="item-icon" />
            <div>
              <h2>{{ item.name }}</h2>
              <p>{{ item.category }}</p>
            </div>
          </div>
          <div class="item-actions">
            <p>${{ item.price.toFixed(2) }}</p>
            <button @click="editItem(index)">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="deleteItem(index)">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <footer>
        &copy; 2025 Coffee Shop Menu Management. All rights reserved.
      </footer>

      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>{{ isEditing ? "Edit Item" : "Add New Item" }}</h2>
          <input v-model="newItem.name" placeholder="Name" />
          <input v-model="newItem.category" placeholder="Category" />
          <input
            v-model.number="newItem.price"
            type="number"
            placeholder="Price"
          />
          <input v-model="newItem.icon" placeholder="Image URL" />
          <button @click="saveItem">Save</button>
          <button @click="cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "Cappuccino",
          category: "Coffee",
          price: 4.99,
          icon: "https://via.placeholder.com/40",
        },
        {
          name: "Green Tea",
          category: "Tea",
          price: 3.49,
          icon: "https://via.placeholder.com/40",
        },
        {
          name: "Chocolate Chip Cookie",
          category: "Snacks",
          price: 2.99,
          icon: "https://via.placeholder.com/40",
        },
      ],
      showModal: false,
      isEditing: false,
      currentIndex: null,
      newItem: {
        name: "",
        category: "",
        price: 0,
        icon: "",
      },
    };
  },
  methods: {
    addNewItem() {
      this.isEditing = false;
      this.newItem = { name: "", category: "", price: 0, icon: "" };
      this.showModal = true;
    },
    editItem(index) {
      this.isEditing = true;
      this.currentIndex = index;
      this.newItem = { ...this.menuItems[index] };
      this.showModal = true;
    },
    deleteItem(index) {
      this.menuItems.splice(index, 1);
    },
    saveItem() {
      if (this.isEditing) {
        this.menuItems[this.currentIndex] = { ...this.newItem };
      } else {
        this.menuItems.push({ ...this.newItem });
      }
      this.showModal = false;
    },
    cancel() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* css starts */
.container {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 20px;
}
.menuitems {
  background: #f3f4f6;
  border: 1px solid #ccc;
  margin: 19px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.menu-management {
  width: 97%;
  margin: 0 auto;
  padding: 30px 0;
}
.menuitems .menuss {
  border: 1px solid #ccc;
  padding: 30px;
  background: #fff;
}
.item-actions p {
  margin-bottom: 0;
  font-size: 30px;
  color: #000;
  font-weight: 600;
}
.item-actions i.fas.fa-edit {
  color: #3b82f6;
  font-size: 30px;
  padding: 0 13px;
}
.menu-management h1 {
  font-size: 50px;
  margin-bottom: 20px;
}
.item-actions i.fas.fa-trash {
  color: #ef4444;
  font-size: 30px;
}
.add-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 35px;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
}
.item-details p {
  font-size: 25px;
  color: #676f7d;
}

.item-details {
  display: flex;
  align-items: center;
}

.item-icon {
  width: 100px;
  height: 100px;
  margin-right: 17px;
}
.menu-item h2 {
  font-size: 32px;
}
.item-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  max-width: 400px;
  width: 100%;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
}

footer {
  text-align: center;
  padding: 20px;
  font-size: 30px;
  color: #888;
}
/* css ends */

/* resposive */
@media screen and (max-width: 2000px) {
  .menu-management h1 {
    font-size: 38px;
  }
  .menu-management {
    padding: 21px 0;
  }
  .add-button {
    padding: 10px 26px;
    font-size: 21px;
  }
  .menu-item {
    padding: 19px;
  }
  .item-icon {
    width: 80px;
    height: 80px;
  }
  .menu-item h2 {
    font-size: 25px;
    margin-bottom: 2px;
  }
  .item-details p {
    font-size: 19px;
  }
  .item-actions p {
    font-size: 25px;
  }
  .item-actions i.fas.fa-edit {
    font-size: 25px;
    padding: 0 9px;
  }
  .item-actions i.fas.fa-trash {
    font-size: 23px;
  }
  footer {
    font-size: 20px;
  }
}
@media screen and (max-width: 1600px) {
  .menu-management h1 {
    font-size: 30px;
  }
  .add-button {
    padding: 9px 23px;
    font-size: 20px;
  }
  .menu-item {
    padding: 18px;
  }
  .menu-item h2 {
    font-size: 23px;
  }
  .item-details p {
    font-size: 17px;
  }
  .item-actions p {
    font-size: 23px;
  }
  .item-actions i.fas.fa-edit {
    font-size: 23px;
  }
  .item-actions i.fas.fa-trash {
    font-size: 22px;
  }
  footer {
    font-size: 18px;
  }
}
/* tab version */
@media screen and (max-width: 990px) {
  .menu-management {
    width: 94%;
  }
}
/* mobile */
@media screen and (max-width: 767px) {
  .menu-management h1 {
    font-size: 25px;
  }
  .add-button {
    padding: 6px 11px;
    font-size: 16px;
  }
  .menu-item h2 {
    font-size: 18px;
  }
  .item-details p {
    font-size: 16px;
    margin-bottom: 0;
  }
  .item-actions p {
    font-size: 15px;
  }
  .item-actions i.fas.fa-edit {
    font-size: 15px;
  }
  .item-actions i.fas.fa-trash {
    font-size: 15px;
  }
  footer {
    font-size: 13px;
  }
  .menuitems .menuss {
    padding: 15px;
  }
  .menu-item {
    padding: 10px;
  }
  .menu-management {
    padding: 8px 0;
  }
  .menuitems {
    margin: 12px;
  }
  .item-icon {
    width: 53px;
    height: 53px;
    margin-right: 9px;
  }
  .menu-item h2 {
    font-size: 16px;
  }
}
/* small mobilw */
@media screen and (max-width: 350px) {
  .menu-item {
    padding: 15px;
    flex-wrap: wrap;
    gap: 11px;
  }
}
/* resposive ends */
</style>
