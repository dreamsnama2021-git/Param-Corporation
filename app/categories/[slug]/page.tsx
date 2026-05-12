// Updated sidebar section of the listing page
<div className="flex flex-col space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
  {/* All Products */}
  <button
    onClick={() => router.push("/categories/all?tab=all")}
    className={`category-item group text-left py-3 px-4 rounded-xl transition-all ${
      isAllProducts && activeTab === "all"
        ? "font-semibold"
        : "text-[#6b7280] hover:text-[#0f172a] hover:bg-gray-100"
    }`}
    style={
      isAllProducts && activeTab === "all"
        ? { backgroundColor: "#F5A62320", color: "#0f172a" }
        : {}
    }
    type="button"
  >
    <div className="flex items-center justify-between">
      <span>All Products</span>
      <span className="text-xs px-2 py-0.5 rounded-full text-white bg-[#F5A623]">
        <ArrowRight className="h-5 w-5" />
      </span>
    </div>
  </button>

  {/* Tab-level filters */}
  {TABS.filter((t) => t.id !== "all").map((tab) => {
    const tabProds = getCategoriesForTab(tab.id);
    const count = allProducts.filter((p) =>
      tabProds.some((cat) => cat.slug === p.category),
    ).length;

    return (
      <React.Fragment key={tab.id}>
        <button
          onClick={() => handleTabChange(tab.id)}
          className={`category-item group text-left py-3 px-4 rounded-xl transition-all ${
            activeTab === tab.id
              ? "font-semibold"
              : "text-[#6b7280] hover:text-[#0f172a] hover:bg-gray-100"
          }`}
          style={
            activeTab === tab.id
              ? {
                  backgroundColor: `${tab.color}20`,
                  color: "#0f172a",
                }
              : {}
          }
          type="button"
        >
          <div className="flex items-center justify-between">
            <span>{tab.label}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                activeTab === tab.id
                  ? "text-white"
                  : "bg-gray-200 text-[#6b7280] group-hover:bg-gray-300"
              }`}
              style={
                activeTab === tab.id
                  ? { backgroundColor: tab.color }
                  : {}
              }
            >
              {count}
            </span>
          </div>
        </button>

        {/* Show subcategories when this tab is active */}
        {activeTab === tab.id && (
          <div className="ml-4 space-y-0.5 border-l-2 border-gray-100 pl-3">
            {tabProds.map((cat) => {
              const catCount = allProducts.filter(
                (p) => p.category === cat.slug
              ).length;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleCategorySelect(cat.slug)}
                  className={`category-item group text-left py-2 px-3 rounded-lg transition-all text-sm w-full ${
                    slug === cat.slug
                      ? "font-semibold"
                      : "text-[#6b7280] hover:text-[#0f172a] hover:bg-gray-50"
                  }`}
                  style={
                    slug === cat.slug
                      ? {
                          backgroundColor: `${activeTabColor}15`,
                          color: "#0f172a",
                        }
                      : {}
                  }
                  type="button"
                >
                  <div className="flex items-center justify-between">
                    <span className="line-clamp-1">{cat.name}</span>
                    <span className="text-[10px] text-gray-400 ml-1">
                      {catCount}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  })}
</div>