import React from "react"
import { 
    StyledCategories,
    H2,
    GroupBoxCard,
    BoxCard,
    CardCategories,
    CtgImg,
    H6 } from "./categories-style";

import { images } from "assets";

const Category = () => {
    return (
        <React.Fragment>
            <StyledCategories>
                <H2>Categories</H2>

                <GroupBoxCard>

                    <BoxCard>
                        <CardCategories>
                            <CtgImg src={images["ctgr-gadget.svg"]} alt=""/>
                            <H6>Gadget</H6>
                        </CardCategories>
                    </BoxCard>

                    <BoxCard>
                        <CardCategories>
                            <CtgImg src={images["ctgr-furniture.svg"]} alt="" />
                            <H6>Furniture</H6>
                        </CardCategories>
                    </BoxCard>

                    <BoxCard>
                        <CardCategories>
                            <CtgImg src={images["ctgr-makeup.svg"]}alt=""/>
                            <H6>Make Up</H6>
                        </CardCategories>
                    </BoxCard>

                    <BoxCard>
                        <CardCategories>
                            <CtgImg src={images["ctgr-sneaker.svg"]} alt="" />
                            <H6>Sneaker</H6>
                        </CardCategories>
                    </BoxCard>

                    <BoxCard>
                        <CardCategories>
                            <CtgImg src={images["ctgr-tools.svg"]} alt="" />
                            <H6>Tools</H6>
                        </CardCategories>
                    </BoxCard>

                    <BoxCard>
                        <CardCategories>
                            <CtgImg src={images["ctgr-baby.svg"]} alt="" />
                            <H6>baby</H6>
                        </CardCategories>
                    </BoxCard>

                </GroupBoxCard>

            </StyledCategories>
        </React.Fragment>
    )
};

export default Category;