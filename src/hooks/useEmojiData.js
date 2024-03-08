
export const useEmojiData = () => {
    const emojiCategories = {
        smileys: ['😀', '😁', '😆', '🥹', '😅', '😂', '🤣', '🥲', '😊', '😇', '🙂', '🙃', '😉', '😌','😍', '🥰', '😘', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎','🥸', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '😣', '😖', '😫', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '🤗', '🤔', '🫣', '🤭', '🫢', '🤫', '🫠', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '🥱', '😴', '🤤', '😮‍💨', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '👹', '👺', '🤡', '💩', '👻', '💀', '👽', '🤖', '🎃' ],
    
        animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🪱', '🐛', '🦋', '🐌', '🐞', '🐜', '🪰', '🪲', '🪳', '🦟', '🦗', '🕷', '🕸', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐓' ],
    
        food: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🫒', '🥑', '🍆', '🥔', '🥕', '🌽', '🌶', '🫑', '🥒', '🥬', '🥦', '🧄', '🧅', '🍄', '🥜', '🌰', '🍞', '🥐', '🥖', '🥨', '🥯', '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🌯', '🫔', '🥙', '🧆', '🥚', '🍳', '🥘', '🍲', '🫕', '🥣', '🥗', '🍿', '🧈', '🧂', '🥫', '🍱', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍠', '🍢', '🍣', '🍤', '🍥', '🥮', '🍡', '🥟', '🥠', '🥡', '🦀', '🦞', '🦐', '🦑', '🦪', '🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫', '🍬'],
    
        drink: ['🍼', '🥛', '☕', '🫖', '🍵', '🧃', '🥤', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🧊', '🥄', '🍴', '🍽', '🥣', '🥡', '🥢'],
    
        activities: ['⚽', '🏀', '🏈', '⚾', '🥎', '🎾', '🏐', '🏉', '🥏', '🎱', '🪀', '🏓', '🏸', '🏒', '🏑', '🥍', '🏏', '🪃', '🥅', '⛳', '🪁', '🏹', '🎣', '🤿', '🥊', '🥋', '🎽', '🛹', '🛷', '⛸', '🥌', '🎿', '⛷', '🏂', '🪂', '🏋️‍♀️', '🏋️', '🏋️‍♂️', '🤼‍♀️', '🤼', '🤼‍♂️', '🤸‍♀️', '🤸', '🤸‍♂️', '⛹️‍♀️', '⛹️', '⛹️‍♂️', '🤺', '🤾‍♀️', '🤾', '🤾‍♂️', '🏌️‍♀️', '🏌️', '🏌️‍♂️', '🏇', '🧘‍♀️', '🧘', '🧘‍♂️', '🏄‍♀️', '🏄', '🏄‍♂️', '🏊‍♀️', '🏊', '🏊‍♂️', '🤽‍♀️', '🤽', '🤽‍♂️', '🚣‍♀️', '🚣', '🚣‍♂️', '🧗‍♀️', '🧗', '🧗‍♂️', '🚵‍♀️', '🚵', '🚵'],
    
        travel: [
          '🚗','🚕','🚙','🚌','🚎','🏎','🚓',
          '🚑','🚒','🚐','🚚','🚛','🚜','🦯',
          '🦽','🦼','🛴','🚲','🛵','🏍','🛺',
          '🚨','🚔','🚍','🚘','🚖','🚡','🚠',
          '🚟','🚃','🚋','🚞','🚝','🚄','🚅',
          '🚈','🚂','🚆','🚇','🚊','🚉','🛫',
          '🛬','🛩','💺','🛰','🚀','🛸','🚁',
          '🛶','⛵','🚤','🛥','🛳','🚢','⛽',
          '🚧','🚦','🚥','🚏','🗺','🗿','🗽',
          '🗼','🏰','🏯','🏟','🎡','🎢','🎠',
          '⛲','🏖','🏝','🏜','🌋','🏔','🗻',
          '🏕','⛺','🏠','🏡','🏘','🏚','🏗',
        ],
        objects: [
          '⌚️','📱','📲','💻','🖥','🖨','🖱️',
          '🖲️','🕹️','💿','📞','📷','📸','🎛️',
          '⏱️','⏲️','⏰','🕰️','🕯️','💡','🔦',
          '🏮','🪔','📔','📕','📖','📗','📘',
          '📙','📚','📓','📒','📃','📜','📄',
          '📰','🗞','📑','🔖','🏷','💰','💴',
          '💵','💶','💷','💸','💳','🧾','💹',
          '✉️','📧','📨','📩','📤','📥','📦',
          '📫','📪','📬','📭','📮','📝','💼',
          '📁','📂','🗂','📅','📆','🗒','🗓',
          '📇','📈','📉','📊','📋','📌','📍',
          '📎','🖇','📏','📐','✂️','🗃','🗄',
          '🗑','🔒','🔓','🔏','🔐','🔑','🗝',
          '🔨','🪓','⛏','⚒','🛠','🗡','⚔️',
          '🔫','🏹','🛡','🪚','🔧','🪛','🔩',
          '⚙️','🗜','⚖️','🦯','🔗','⛓','🪝',
          '🧰','🧲','🪜','⚗️','🧪','🧫','🧬',
          '🔬','🔭','📡','💉','🩸','💊','🩹',
          '🩺','🚪','🛏','🛋','🪑','🚽','🚿',
          '🛁','🪒','🧴','🧷','🧹','🧺','🧻',
          '🪣','🧼','🪥','🧽','🧯','🛒','🚬',
        ],
        hearts: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝'],
        symbols: [
          '🔟','🔢','🔣','🔠','🔡','🔤','🅰️',
          '🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔',
          'Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘',
          '🆙','🆚','🈁','🈂️','🈷️','🈶','🈯',
          '🉐','🈹','🈚','🈲','🉑','🈸','🈴',
          '🈳','㊗️','㊙️','🈺','🈵','🔴','🟠',
          '🟡','🟢','🔵','🟣','🟤','⚫','⚪',
          '🟥','🟧','🟨','🟩','🟦','🟪','🟫',
          '⬛','⬜','🔶','🔷','🔸','🔹','🔺','🔻',
          '💠','🔘','🔳','🔲'
        ],
        flags: [
          '🏁','🚩','🎌','🏴','🏳️','🏳️‍🌈','🏴‍☠️',
          '🇦🇨','🇦🇩','🇦🇪','🇦🇫','🇦🇬','🇦🇮','🇦🇱',
          '🇦🇲','🇦🇴','🇦🇶','🇦🇷','🇦🇸','🇦🇹','🇦🇺',
          '🇦🇼','🇦🇽','🇦🇿','🇧🇦','🇧🇧','🇧🇩','🇧🇪',
          '🇧🇫','🇧🇬','🇧🇭','🇧🇮','🇧🇯','🇧🇱','🇧🇲',
          '🇧🇳','🇧🇴','🇧🇶','🇧🇷','🇧🇸','🇧🇹','🇧🇻',
          '🇧🇼','🇧🇾','🇧🇿','🇨🇦','🇨🇨','🇨🇩','🇨🇫',
          '🇨🇬','🇨🇭','🇨🇮','🇨🇰','🇨🇱','🇨🇲','🇨🇳',
          '🇨🇴','🇨🇵','🇨🇷','🇨🇺','🇨🇻','🇨🇼','🇨🇽',
          '🇨🇾','🇨🇿','🇩🇪','🇩🇬','🇩🇯','🇩🇰','🇩🇲',
          '🇩🇴','🇩🇿','🇪🇦','🇪🇨','🇪🇪','🇪🇬','🇪🇭',
          '🇪🇷','🇪🇸','🇪🇹','🇪🇺','🇫🇮','🇫🇯','🇫🇰',
          '🇫🇲','🇫🇴','🇫🇷','🇬🇦','🇬🇧','🇬🇩','🇬🇪',
          '🇬🇫','🇬🇬','🇬🇭','🇬🇮','🇬🇱','🇬🇲','🇬🇳',
          '🇬🇵','🇬🇶','🇬🇷','🇬🇸','🇬🇹','🇬🇺','🇬🇼',
          '🇬🇾','🇭🇰','🇭🇲','🇭🇳','🇭🇷','🇭🇹','🇭🇺',
          '🇮🇨','🇮🇩','🇮🇪','🇮🇱','🇮🇲','🇮🇳','🇮🇴',
          '🇮🇶','🇮🇷','🇮🇸','🇮🇹','🇯🇪','🇯🇲','🇯🇴',
          '🇯🇵','🇰🇪','🇰🇬','🇰🇭','🇰🇮','🇰🇲','🇰🇳',
          '🇰🇵','🇰🇷','🇰🇼','🇰🇾','🇰🇿','🇱🇦','🇱🇧',
          '🇱🇨','🇱🇮','🇱🇰','🇱🇷','🇱🇸','🇱🇹','🇱🇺',
          '🇱🇻','🇱🇾','🇲🇦','🇲🇨','🇲🇩','🇲🇪','🇲🇫',
          '🇲🇬','🇲🇭','🇲🇰','🇲🇱','🇲🇲','🇲🇳','🇲🇴',
          '🇲🇵','🇲🇶','🇲🇷','🇲🇸','🇲🇹','🇲🇺','🇲🇻',
          '🇲🇼','🇲🇽','🇲🇾','🇲🇿','🇳🇦','🇳🇨','🇳🇪',
          '🇳🇫','🇳🇬','🇳🇮','🇳🇱','🇳🇴','🇳🇵','🇳🇷',
          '🇳🇺','🇳🇿','🇴🇲','🇵🇦','🇵🇪','🇵🇫','🇵🇬',
          '🇵🇭','🇵🇰','🇵🇱','🇵🇲','🇵🇳','🇵🇷','🇵🇸',
          '🇵🇹','🇵🇼','🇵🇾','🇶🇦','🇷🇪','🇷🇴','🇷🇸',
          '🇷🇺','🇷🇼','🇸🇦','🇸🇧','🇸🇨','🇸🇩','🇸🇪',
          '🇸🇬','🇸🇭','🇸🇮','🇸🇯','🇸🇰','🇸🇱','🇸🇲',
          '🇸🇳','🇸🇴','🇸🇷','🇸🇸','🇸🇹','🇸🇻','🇸🇽',
          '🇸🇾','🇸🇿','🇹🇦','🇹🇨','🇹🇩','🇹🇫','🇹🇬',
          '🇹🇭','🇹🇯','🇹🇰','🇹🇱','🇹🇲','🇹🇳','🇹🇴',
          '🇹🇷','🇹🇹','🇹🇻','🇹🇼','🇹🇿','🇺🇦','🇺🇬',
          '🇺🇲','🇺🇳','🇺🇸','🇺🇾','🇺🇿','🇻🇦','🇻🇨',
          '🇻🇪','🇻🇬','🇻🇮','🇻🇳','🇻🇺','🇼🇫','🇼🇸',
          '🇽🇰','🇾🇪','🇾🇹','🇿🇦','🇿🇲','🇿🇼','🏴‍☠️',
          '🏴󠁧󠁢󠁥󠁮󠁧󠁿','🏴󠁧󠁢󠁳󠁣󠁴󠁿','🏴󠁧󠁢󠁷󠁬󠁳󠁿',
        ]
      };

      return emojiCategories;
}