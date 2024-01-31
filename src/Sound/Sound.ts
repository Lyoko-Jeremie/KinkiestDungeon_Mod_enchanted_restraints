// 振荡器的频率。以赫兹为单位
// “叮” 440Hz是音乐中的A音
// “咚” 100Hz  60Hz-150Hz
// 中央C（C4）的频率大约为261.6Hz。较低的音，如低音C（C2），其频率大约为65.4Hz。
enum PlayDingType {
    ding = 440,   // A音的频率
    dong = 100,
}

// from GPT-4
function playDing(playHz: PlayDingType) {
    // @ts-ignore
    const AudioContext = window.AudioContext || window.webkitAudioContext;

    // 创建一个AudioContext实例
    const audioContext = new AudioContext();

    // 创建一个OscillatorNode（振荡器），它代表一个周期性波形，比如正弦波
    const oscillator = audioContext.createOscillator();

    // 设置振荡器的类型为正弦波 ('sine')
    oscillator.type = 'sine';

    // 设置振荡器的频率。这里以赫兹为单位
    oscillator.frequency.setValueAtTime(playHz, audioContext.currentTime);

    // 创建一个GainNode（增益节点），用来控制音频的总音量
    const gainNode = audioContext.createGain();

    // 设置增益节点的音量。0是无声，1是最大音量
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + 0.01); // 音量从0快速上升到1
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3); // 然后在0.3秒内下降到0

    // 将振荡器连接到增益节点
    oscillator.connect(gainNode);

    // 再将增益节点连接到AudioContext的目标节点，这通常是扬声器
    gainNode.connect(audioContext.destination);

    // 启动振荡器
    oscillator.start(audioContext.currentTime);

    // 在0.3秒后停止振荡器，这将生成一个短暂的“叮”声
    oscillator.stop(audioContext.currentTime + 0.3);
}

