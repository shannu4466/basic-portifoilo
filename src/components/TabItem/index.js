import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTabItem = () => {
    updateTabItem(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
