function createDualSlider(minRangeId, maxRangeId, rangeTrackId, minTextId, maxTextId, minConstValue, maxConstValue) {
    const minRange = document.getElementById(minRangeId);
    const maxRange = document.getElementById(maxRangeId);
    const rangeTrack = document.getElementById(rangeTrackId);
    const minText = document.getElementById(minTextId);
    const maxText = document.getElementById(maxTextId);

    function updateRange() {
        const minValue = parseInt(minRange.value);
        const maxValue = parseInt(maxRange.value);

        if (minValue > maxValue) {
            minRange.value = maxValue;
            maxRange.value = minValue;
        }

        rangeTrack.style.left = `${(minValue / maxConstValue) * 100}%`;
        rangeTrack.style.width = `${((maxValue - minValue) / maxConstValue) * 100}%`;

        minText.value = minValue;
        maxText.value = maxValue;
    }

    minRange.addEventListener("input", updateRange);
    maxRange.addEventListener("input", updateRange);
    minText.addEventListener("input", function () {
        minRange.value = parseInt(minText.value) || minConstValue;
        updateRange();
    });
    maxText.addEventListener("input", function () {
        maxRange.value = parseInt(maxText.value) || maxConstValue;
        updateRange();
    });

    updateRange();
}

createDualSlider("min-range", "max-range", "range-track", "min-text", "max-text", 1, 47);
createDualSlider("min-range_2", "max-range_2", "range-track_2", "min-text_2", "max-text_2", 1, 20);

const minRange2 = document.getElementById("min-range_2");
const maxRange2 = document.getElementById("max-range_2");
const minText2 = document.getElementById("min-text_2");
const maxText2 = document.getElementById("max-text_2");

const halfDayRadio = document.getElementById("half-day-radio");
const fullDayRadio = document.getElementById("full-day-radio");
const severalDaysRadio = document.getElementById("several-days-radio");

function updateSliderAvailability() {
    const isSeveralDaysChecked = severalDaysRadio.checked;

    minRange2.disabled = !isSeveralDaysChecked;
    maxRange2.disabled = !isSeveralDaysChecked;
    minText2.disabled = !isSeveralDaysChecked;
    maxText2.disabled = !isSeveralDaysChecked;
}

halfDayRadio.addEventListener("change", updateSliderAvailability);
fullDayRadio.addEventListener("change", updateSliderAvailability);
severalDaysRadio.addEventListener("change", updateSliderAvailability);

updateSliderAvailability();  // Initialize state
