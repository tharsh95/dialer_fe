export function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(remainingMinutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    if (hours > 0) {
      return `${formattedHours}h:${formattedMinutes}m:${formattedSeconds}s`;
    } else {
      return `${formattedMinutes}m:${formattedSeconds}s`;
    }
  }



 export function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}