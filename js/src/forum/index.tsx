import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import type ItemList from 'flarum/common/utils/ItemList';
import type Mithril from 'mithril';

const PREFIX = 'tacraft-sociality-user-uid';

// `UserCard` is loaded lazily by the forum, so it is referenced by module path
// and Flarum defers the extension until the module has been loaded.
const USER_CARD = 'flarum/forum/components/UserCard';

app.initializers.add(PREFIX, () => {
  extend(USER_CARD, 'infoItems', function (this: any, items: ItemList<Mithril.Children>) {
    const user = this.attrs.user;
    const id = typeof user?.id === 'function' ? user.id() : null;

    if (!id) {
      return;
    }

    items.add('uid', app.translator.trans(`${PREFIX}.forum.uid_text`, { uid: id }), 60);
  });
});
