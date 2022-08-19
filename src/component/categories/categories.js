import React from "react"
import { images } from "assets";

const Category = () => {
    return (
        <React.Fragment>
            <div className="categories">
                <h2>Categories</h2>

                <div className="group-box-card">

                    <div className="box-card">
                        <div className="card-categories">
                            <img className="img-cat" src={images["ctgr-gadget.svg"]} alt=""/>
                            <h6>Gadget</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src={images["ctgr-furniture.svg"]} alt=""/>
                            <h6>Furniture</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src={images["ctgr-makeup.svg"]}alt=""/>
                            <h6>Make Up</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src={images["ctgr-sneaker.svg"]} alt="" />
                            <h6>Sneaker</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src={images["ctgr-tools.svg"]} alt="" />
                            <h6>Tools</h6>
                        </div>
                    </div>

                    <div className="box-card">
                        <div className="card-categories">
                            <img src={images["ctgr-baby.svg"]} alt="" />
                            <h6>baby</h6>
                        </div>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
};

export default Category;