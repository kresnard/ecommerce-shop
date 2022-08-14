const Category = () => {
    return (
        <div className="container">
            <div className="categories">
                <h2>Categories</h2>

                <div className="group-box-card">

                    <div className="box-card">
                        <div className="card-categories">
                            <img className="img-cat" src="/asset/home/home-ctgr/gadget.svg" alt=""/>
                            <h6>Gadget</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/furniture.svg" alt=""/>
                            <h6>Furniture</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/makeup.svg" alt=""/>
                            <h6>Make Up</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/sneaker.svg" alt="" />
                            <h6>Sneaker</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/tools.svg" alt="" />
                            <h6>Tools</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src="/asset/home/home-ctgr/baby.svg" alt="" />
                            <h6>baby</h6>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Category;