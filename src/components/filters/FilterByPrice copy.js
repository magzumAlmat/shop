export default function FilterByPrice() {
    return (
        <div>
      <label>
        Pick a fruit:
        <select name="selectedFruit">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          {this.state.products.map(order => (
                              <option key={order} value={order}>
                                {order.price}
                              </option>
                            ))}
        </select>
      </label>
      </div>
    );
    
  }