import React from "react";
import {useTranslation} from "next-i18next";
import {LanguagesKeys} from "../../utils/types/ILanguagesKeys";
import {IProduct} from "../../utils/types/IProduct";

interface IDescription extends Omit<IProduct, 'id' | 'price' | 'imageUrl' | 'public' | 'status' | 'city' | 'prdId' | 'createdAt'> {substr: boolean}
export const GenerateDescription = ({type, floorsCount, floorArea, region, newBuilding, elevator, furniture, rooms, baths, currentFloor, substr}: IDescription) => {
    const {t, i18n} = useTranslation();
    const lang: LanguagesKeys = i18n.language as LanguagesKeys;
    switch (type?.en) {
        case "house": {
            const isHasElevator = elevator ? t("singlePrd.houseDesc.isHas.elevator") : null;
            const isNewBuilding = newBuilding ? t("singlePrd.houseDesc.isHas.isNewBuilding") : null;
            const isHasFurniture = furniture ? t("singlePrd.houseDesc.isHas.isHasFurniture") : null;
            const isHasMuchFloorArea = floorArea && floorArea >= 100 ? t("singlePrd.houseDesc.isHas.isHasMuchFloorArea") : null;
            const isHasMuchRooms = rooms && rooms >= 2 ? t("singlePrd.houseDesc.isHas.isHasMuchRooms") : null;
            const isHasBath = baths ? t("singlePrd.houseDesc.isHas.isHasBath") : null;

            const description = t("singlePrd.houseDesc.desc", {
                region: region && region[lang],
                floorsCount: floorsCount,
                floorArea: floorArea,
                isHasMuchFloorArea: isHasMuchFloorArea,
                isHasMuchRooms: isHasMuchRooms,
                isHasElevator: isHasElevator,
                rooms: rooms,
                isHasBath: isHasBath,
                isHasFurniture: isHasFurniture,
                isNewBuilding: isNewBuilding,
            })
            if(substr) {
                if(description.split(" ").length > 20) {
                    return (
                        <p
                            className="mb-0 lh-214"
                            dangerouslySetInnerHTML={{
                                __html: description.split(" ").slice(0, 20).join(" ") + "..."
                            }}
                        />
                    );
                }
            }


            return <p className="mb-0 lh-214" dangerouslySetInnerHTML={{ __html: description }} />;
        }

        case "office": {
            const isHasElevator = elevator ? t("singlePrd.officeDesc.isHas.elevator") : null;
            const isNewBuilding = newBuilding ? t("singlePrd.officeDesc.isHas.isNewBuilding") : null;
            const isHasFurniture = furniture ? t("singlePrd.officeDesc.isHas.isHasFurniture") : null;
            const isHasMuchFloorArea = floorArea && floorArea >= 100 ? t("singlePrd.officeDesc.isHas.isHasMuchFloorArea") : null;
            const isHasBath = baths ? t("singlePrd.officeDesc.isHas.isHasBath") : null;
            const isHasMuchBaths = baths && baths > 1 ? t("singlePrd.officeDesc.isHas.isHasMuchBaths") : null;

            const description = t("singlePrd.officeDesc.desc", {
                floorsCount: floorsCount,
                currentFloor: currentFloor,
                floorArea: floorArea,
                isHasMuchFloorArea: isHasMuchFloorArea,
                isHasElevator: isHasElevator,
                rooms: rooms,
                isHasBath: isHasBath,
                isHasFurniture: isHasFurniture,
                isNewBuilding: isNewBuilding,
                isHasMuchBath: isHasMuchBaths
            });

            if(substr) {
                if(description.split(" ").length > 20) {
                    return (
                        <p
                            className="mb-0 lh-214"
                            dangerouslySetInnerHTML={{
                                __html: description.split(" ").slice(0, 20).join(" ") + "..."
                            }}
                        />
                    );
                }
            }

            return <p className="mb-0 lh-214" dangerouslySetInnerHTML={{ __html: description }} />;
        }
        case "apartment": {
            const isHasElevator = elevator ? t("singlePrd.apartmentDesc.isHas.elevator") : null;
            const isNewBuilding = newBuilding ? t("singlePrd.apartmentDesc.isHas.isNewBuilding") : null;
            const isHasFurniture = furniture ? t("singlePrd.apartmentDesc.isHas.isHasFurniture") : null;

            const description = t("singlePrd.apartmentDesc.desc", {
                floorsCount: floorsCount,
                currentFloor: currentFloor,
                floorArea: floorArea,
                baths: baths,
                isHasElevator: isHasElevator,
                rooms: rooms,
                isHasFurniture: isHasFurniture,
                isNewBuilding: isNewBuilding,
            });

            if(substr) {
                if(description.split(" ").length > 20) {
                    return (
                        <p
                            className="mb-0 lh-214"
                            dangerouslySetInnerHTML={{
                                __html: description.split(" ").slice(0, 20).join(" ") + "..."
                            }}
                        />
                    );
                }
            }

            return <p className="mb-0 lh-214" dangerouslySetInnerHTML={{ __html: description }} />;
        }
        case "land": {
            return (
                <p className="mb-0 lh-214" dangerouslySetInnerHTML={{
                    __html: t("singlePrd.landDesc.desc", {
                        floorArea: floorArea,
                        region: region
                    })
                }} />
            )
        }
        default:
            return <></>
    }
}
