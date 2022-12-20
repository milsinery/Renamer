const allLayers = figma.currentPage.findAll();
const layersNumber = allLayers.length;

console.log(layersNumber)

if (layersNumber === 0) {
  figma.notify('Nothing to rename');
} else if (layersNumber > 10000) {
  figma.notify('It is too big file');
} else {
  allLayers.forEach(
    (layer, index) => (layer.name = `${index}_${layer.type.toLowerCase()}`)
  );
  figma.notify(
    layersNumber > 1
      ? `Done! ${layersNumber} elements was renamed`
      : `Done! ${layersNumber} element was renamed`
  );
}

figma.closePlugin();
