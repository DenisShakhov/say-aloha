// const minRange = document.getElementById("min-range");
//             const maxRange = document.getElementById("max-range_2");
//             const rangeTrack = document.getElementById("range-track_2");
//             const minText = document.getElementById("min-text_2");
//             const maxText = document.getElementById("max-text_2");

//             function updateRange() {
//                 const min_const_value = 1
//                 const max_const_value = 47
//                 const minValue = parseInt(minRange.value);
//                 const maxValue = parseInt(maxRange.value);

//                 if (minValue > maxValue) {
//                     minRange.value = maxValue;
//                     maxRange.value = minValue;
//                 }

//                 rangeTrack.style.left = `${(minValue / max_const_value) * 100}%`;
//                 rangeTrack.style.width = `${((maxValue - minValue) / max_const_value) * 100}%`;

//                 minText.value = minValue;
//                 maxText.value = maxValue;
//             }

//             minRange.addEventListener("input", updateRange);
//             maxRange.addEventListener("input", updateRange);
//             minText.addEventListener("input", function () {
//                 minRange.value = parseInt(minText.value) || min_const_value;
//                 updateRange();
//             });
//             maxText.addEventListener("input", function () {
//                 maxRange.value = parseInt(maxText.value) || max_const_value;
//                 updateRange();
//             });

//             updateRange();