const allLayers = figma.currentPage.findAll();
const layersNumber = allLayers.length;

if (layersNumber !== 0) {
  allLayers.forEach(
    (layer, index) => (layer.name = `${index}_${layer.type.toLowerCase()}`)
  );
  figma.notify(
    layersNumber > 1
      ? `Done! ${layersNumber} elements was renamed`
      : `Done! ${layersNumber} element was renamed`
  );
}

figma.notify('Nothing to rename');

figma.closePlugin();
