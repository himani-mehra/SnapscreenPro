
const fullWidth = document.documentElement.scrollWidth;
const fullHeight = document.documentElement.scrollHeight;
const container = document.body;

container.style.width = `${fullWidth}px`;
container.style.height = `${fullHeight}px`;

html2canvas(container, {
    width: fullWidth,
    height: fullHeight,
    scrollX: 0,
    scrollY: 0,
    windowWidth: fullWidth,
    windowHeight: fullHeight
}).then(canvas => {
    const link = document.createElement('a');
    link.download = 'full-page-snapshot.png';
    link.href = canvas.toDataURL();
    link.click();
});
