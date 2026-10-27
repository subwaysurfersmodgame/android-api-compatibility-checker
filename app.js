const device = document.querySelector('#device-api');
const minimum = document.querySelector('#min-sdk');
const result = document.querySelector('#result');

document.querySelector('#check').addEventListener('click', () => {
  const deviceApi = Number(device.value);
  const minApi = Number(minimum.value);
  result.className = 'result';

  if (!Number.isInteger(minApi) || minApi < 1 || minApi > 36) {
    result.classList.add('fail');
    result.innerHTML = '<strong>Enter a valid minimum SDK</strong><span>Use a whole API-level number from 1 through 36.</span>';
    return;
  }

  if (deviceApi >= minApi) {
    result.classList.add('pass');
    result.innerHTML = `<strong>API-level requirement met</strong><span>The device provides API ${deviceApi}, which is equal to or higher than the app minimum of API ${minApi}. Other hardware and software requirements can still affect installation.</span>`;
  } else {
    result.classList.add('fail');
    result.innerHTML = `<strong>API-level requirement not met</strong><span>The device provides API ${deviceApi}, but the app declares API ${minApi} as its minimum. An Android version update or a release with a lower minimum SDK would be required.</span>`;
  }
});
